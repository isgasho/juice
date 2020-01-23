(function() {var implementors = {};
implementors["juice"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layer/struct.LayerConfig.html\" title=\"struct juice::layer::LayerConfig\">LayerConfig</a>",synthetic:false,types:["juice::layer::LayerConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/layer/enum.LayerType.html\" title=\"enum juice::layer::LayerType\">LayerType</a>",synthetic:false,types:["juice::layer::LayerType"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/activation/relu/struct.ReLU.html\" title=\"struct juice::layers::activation::relu::ReLU\">ReLU</a>",synthetic:false,types:["juice::layers::activation::relu::ReLU"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/activation/sigmoid/struct.Sigmoid.html\" title=\"struct juice::layers::activation::sigmoid::Sigmoid\">Sigmoid</a>",synthetic:false,types:["juice::layers::activation::sigmoid::Sigmoid"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/activation/tanh/struct.TanH.html\" title=\"struct juice::layers::activation::tanh::TanH\">TanH</a>",synthetic:false,types:["juice::layers::activation::tanh::TanH"]},{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Convolution&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/convolution/struct.Convolution.html\" title=\"struct juice::layers::common::convolution::Convolution\">Convolution</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B::CC: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>",synthetic:false,types:["juice::layers::common::convolution::Convolution"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/convolution/struct.ConvolutionConfig.html\" title=\"struct juice::layers::common::convolution::ConvolutionConfig\">ConvolutionConfig</a>",synthetic:false,types:["juice::layers::common::convolution::ConvolutionConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/linear/struct.LinearConfig.html\" title=\"struct juice::layers::common::linear::LinearConfig\">LinearConfig</a>",synthetic:false,types:["juice::layers::common::linear::LinearConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/log_softmax/struct.LogSoftmax.html\" title=\"struct juice::layers::common::log_softmax::LogSoftmax\">LogSoftmax</a>",synthetic:false,types:["juice::layers::common::log_softmax::LogSoftmax"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Pooling&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/pooling/struct.Pooling.html\" title=\"struct juice::layers::common::pooling::Pooling\">Pooling</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B::CPOOL: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>",synthetic:false,types:["juice::layers::common::pooling::Pooling"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/pooling/struct.PoolingConfig.html\" title=\"struct juice::layers::common::pooling::PoolingConfig\">PoolingConfig</a>",synthetic:false,types:["juice::layers::common::pooling::PoolingConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/layers/common/pooling/enum.PoolingMode.html\" title=\"enum juice::layers::common::pooling::PoolingMode\">PoolingMode</a>",synthetic:false,types:["juice::layers::common::pooling::PoolingMode"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/softmax/struct.Softmax.html\" title=\"struct juice::layers::common::softmax::Softmax\">Softmax</a>",synthetic:false,types:["juice::layers::common::softmax::Softmax"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Dropout&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/dropout/struct.Dropout.html\" title=\"struct juice::layers::common::dropout::Dropout\">Dropout</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B::CDROP: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>",synthetic:false,types:["juice::layers::common::dropout::Dropout"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/common/dropout/struct.DropoutConfig.html\" title=\"struct juice::layers::common::dropout::DropoutConfig\">DropoutConfig</a>",synthetic:false,types:["juice::layers::common::dropout::DropoutConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/loss/negative_log_likelihood/struct.NegativeLogLikelihood.html\" title=\"struct juice::layers::loss::negative_log_likelihood::NegativeLogLikelihood\">NegativeLogLikelihood</a>",synthetic:false,types:["juice::layers::loss::negative_log_likelihood::NegativeLogLikelihood"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/loss/negative_log_likelihood/struct.NegativeLogLikelihoodConfig.html\" title=\"struct juice::layers::loss::negative_log_likelihood::NegativeLogLikelihoodConfig\">NegativeLogLikelihoodConfig</a>",synthetic:false,types:["juice::layers::loss::negative_log_likelihood::NegativeLogLikelihoodConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/loss/mean_squared_error/struct.MeanSquaredError.html\" title=\"struct juice::layers::loss::mean_squared_error::MeanSquaredError\">MeanSquaredError</a>",synthetic:false,types:["juice::layers::loss::mean_squared_error::MeanSquaredError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/utility/flatten/struct.Flatten.html\" title=\"struct juice::layers::utility::flatten::Flatten\">Flatten</a>",synthetic:false,types:["juice::layers::utility::flatten::Flatten"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/utility/reshape/struct.Reshape.html\" title=\"struct juice::layers::utility::reshape::Reshape\">Reshape</a>",synthetic:false,types:["juice::layers::utility::reshape::Reshape"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/utility/reshape/struct.ReshapeConfig.html\" title=\"struct juice::layers::utility::reshape::ReshapeConfig\">ReshapeConfig</a>",synthetic:false,types:["juice::layers::utility::reshape::ReshapeConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/layers/container/sequential/struct.SequentialConfig.html\" title=\"struct juice::layers::container::sequential::SequentialConfig\">SequentialConfig</a>",synthetic:false,types:["juice::layers::container::sequential::SequentialConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/solver/confusion_matrix/struct.Sample.html\" title=\"struct juice::solver::confusion_matrix::Sample\">Sample</a>",synthetic:false,types:["juice::solver::confusion_matrix::Sample"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/solver/confusion_matrix/struct.Accuracy.html\" title=\"struct juice::solver::confusion_matrix::Accuracy\">Accuracy</a>",synthetic:false,types:["juice::solver::confusion_matrix::Accuracy"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/solver/regression_evaluator/struct.Sample.html\" title=\"struct juice::solver::regression_evaluator::Sample\">Sample</a>",synthetic:false,types:["juice::solver::regression_evaluator::Sample"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/solver/regression_evaluator/struct.MeanSquaredErrorAccuracy.html\" title=\"struct juice::solver::regression_evaluator::MeanSquaredErrorAccuracy\">MeanSquaredErrorAccuracy</a>",synthetic:false,types:["juice::solver::regression_evaluator::MeanSquaredErrorAccuracy"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/solver/struct.SolverConfig.html\" title=\"struct juice::solver::SolverConfig\">SolverConfig</a>",synthetic:false,types:["juice::solver::SolverConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/solver/enum.SolverKind.html\" title=\"enum juice::solver::SolverKind\">SolverKind</a>",synthetic:false,types:["juice::solver::SolverKind"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/solver/enum.SGDKind.html\" title=\"enum juice::solver::SGDKind\">SGDKind</a>",synthetic:false,types:["juice::solver::SGDKind"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/solver/enum.LRPolicy.html\" title=\"enum juice::solver::LRPolicy\">LRPolicy</a>",synthetic:false,types:["juice::solver::LRPolicy"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/solver/enum.RegularizationMethod.html\" title=\"enum juice::solver::RegularizationMethod\">RegularizationMethod</a>",synthetic:false,types:["juice::solver::RegularizationMethod"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"juice/weight/struct.WeightConfig.html\" title=\"struct juice::weight::WeightConfig\">WeightConfig</a>",synthetic:false,types:["juice::weight::WeightConfig"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/weight/enum.DimCheckMode.html\" title=\"enum juice::weight::DimCheckMode\">DimCheckMode</a>",synthetic:false,types:["juice::weight::DimCheckMode"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"juice/weight/enum.FillerType.html\" title=\"enum juice::weight::FillerType\">FillerType</a>",synthetic:false,types:["juice::weight::FillerType"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()