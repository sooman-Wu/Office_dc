<template>
  <div class="form_wrapper">
    <div class="form_box">
      <el-steps :active="active" simple finish-status="success">
        <el-step title="基本信息"></el-step>
        <el-step title="提交申请"></el-step>
      </el-steps>
      <div class="form_list">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="first-page" v-show="active==0">
            <el-form-item label="用户民" prop="name">
              <el-col :span="13">
                <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="民族" prop="minzu">
              <el-col :span="13">
                <el-input v-model="ruleForm.minzu"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="婚姻状况" prop="status">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="已婚"></el-radio>
                <el-radio label="未婚"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生日期" required>
              <el-col :span="13">
                <el-form-item prop="date">
                  <el-date-picker
                    type="date"
                    placeholder="出生日期"
                    v-model="ruleForm.date"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="籍贯" prop="jiguan">
              <el-col :span="13">
                <el-input v-model="ruleForm.jiguan"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="文化程度" prop="culture">
              <el-col :span="13">
                <el-input v-model="ruleForm.culture"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <div style="margin-top: 5px;">
                <el-button type="primary" @click="next">下一步</el-button>
              </div>
            </el-form-item>
          </div>

          <div class="next-page" v-show="active==1">
            <el-form-item label="身份证号" prop="idcard">
              <el-col :span="13">
                <el-input v-model="ruleForm.idcard"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="现地址" prop="address">
              <el-col :span="13">
                <el-input v-model="ruleForm.address"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="邮编" prop="code">
              <el-col :span="13">
                <el-input v-model="ruleForm.code"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
              <el-col :span="13">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="户口类别" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio label="非农"></el-radio>
                <el-radio label="农业"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="申请信息" prop="desc">
              <el-col :span="13">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <div style="margin-top: 20px;">
                <el-button type="primary" @click="prev">上一步</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>你的位置是:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>办事大厅</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '',
      ruleForm: {
        name: '',
        sex: '',
        minzu: '',
        status: '',
        date: '',
        jiguan: '',
        culture: '',
        idcard: '',
        address: '',
        code: '',
        phone: '',
        type: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        minzu: [
          { required: true, message: '民族不能为空', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择婚姻状况', trigger: 'change' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        jiguan: [
          { required: true, message: '籍贯不能为空', trigger: 'blur' }
        ],
        culture: [
          { required: true, message: '文化程度不能为空', trigger: 'blur' }
        ],
        idcard: [
          { required: true, message: '身份证号不能为空', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '现地址不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '邮编不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '电话不能为空', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择户口类型', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    next() {
      this.active++
    },
    prev() {
      this.active--
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  }
}
</script>
